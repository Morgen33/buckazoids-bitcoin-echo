"use client"

import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

// Simplified version of TextRotate with better performance
interface OptimizedTextRotateProps {
  texts: string[]
  rotationInterval?: number
  mainClassName?: string
  loop?: boolean
  auto?: boolean
  onNext?: (index: number) => void
}

export interface OptimizedTextRotateRef {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

const OptimizedTextRotate = forwardRef<OptimizedTextRotateRef, OptimizedTextRotateProps>(
  (
    {
      texts,
      rotationInterval = 2000,
      loop = true,
      auto = true,
      onNext,
      mainClassName,
      ...props
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const isMobile = useIsMobile();
    
    // Simpler animation settings for better performance
    const transition = isMobile
      ? { type: "tween" as const, duration: 0.3 }
      : { type: "spring" as const, damping: 25, stiffness: 300 };
    
    useEffect(() => {
      setMounted(true);
    }, []);

    // Helper function to handle index changes and trigger callback
    const handleIndexChange = useCallback((newIndex: number) => {
      setCurrentTextIndex(newIndex)
      onNext?.(newIndex)
    }, [onNext])

    const next = useCallback(() => {
      const nextIndex = currentTextIndex === texts.length - 1
        ? (loop ? 0 : currentTextIndex)
        : currentTextIndex + 1
      
      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const previous = useCallback(() => {
      const prevIndex = currentTextIndex === 0
        ? (loop ? texts.length - 1 : currentTextIndex)
        : currentTextIndex - 1
      
      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const jumpTo = useCallback((index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1))
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex)
      }
    }, [texts.length, currentTextIndex, handleIndexChange])

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0)
      }
    }, [currentTextIndex, handleIndexChange])

    // Expose navigation functions via ref
    useImperativeHandle(ref, () => ({
      next,
      previous,
      jumpTo,
      reset,
    }), [next, previous, jumpTo, reset])

    useEffect(() => {
      if (!auto) return
      const intervalId = setInterval(next, rotationInterval)
      return () => clearInterval(intervalId)
    }, [next, rotationInterval, auto])

    if (!mounted) {
      return <span className={cn(mainClassName)}>{texts[0]}</span>;
    }

    return (
      <motion.span
        className={cn("inline-block whitespace-pre-wrap", mainClassName)}
        {...props}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentTextIndex}
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={transition}
            aria-hidden="true"
          >
            {texts[currentTextIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    )
  }
)

OptimizedTextRotate.displayName = "OptimizedTextRotate"

export { OptimizedTextRotate }

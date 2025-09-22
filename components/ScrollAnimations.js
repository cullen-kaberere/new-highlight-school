"use client"
import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".fade-in-on-scroll, .slide-in-left, .slide-in-right, .scale-in")

    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}

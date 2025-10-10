/**
 * Hero section animation timing configuration
 * All values in milliseconds
 */
export const HERO_TIMING = {
  // Time typing indicator is visible before agent message
  TYPING_DURATION: 2000,

  // Final wait after last message (2x typing duration)
  get FINAL_WAIT_DURATION(): number {
    return this.TYPING_DURATION * 4
  }
}

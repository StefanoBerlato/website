import type { Section } from '../shared';

export interface Reviews {
  /**
   * Year in which you did the reviews.
   */
  year: string;

  /**
   * List of venues for which you did the review.
   */
  venues: string;
}

export interface ReviewsSection extends Section {
  /**
   * List of your reviews grouped by year. Start with the most recent one.
   */
  reviews: Reviews[];
}

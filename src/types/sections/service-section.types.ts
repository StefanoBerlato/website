import type { Section } from '../shared';

export interface Service {
  /**
   * Year in which you did the service.
   */
  year: string;

  /**
   * List of venues for which you did a review.
   */
  reviews: string;
}

export interface ServiceSection extends Section {
  /**
   * List of your service grouped by year. Start with the most recent one.
   */
  service: Service[];
}

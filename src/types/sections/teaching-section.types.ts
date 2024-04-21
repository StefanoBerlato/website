import type { DateRange, LinkButton, Photo, Section } from '../shared';

export interface Teaching {
  /**
   * Name of the teaching activity.
   */
  title: string;

  /**
   * Name of the institution in which you do the teaching activity.
   */
  institution: string;

  /**
   * [WEB] Logo of the institution.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 56x56px
   */
  image?: Photo;

  /**
   * Date range when you were doing the teaching activity in the institution.
   */
  dates: DateRange;

  /**
   * A short overview of the teaching activity. You can use markdown syntax.
   */
  description: string;

  /**
   * [WEB] Links related to your teaching activity (e.g. course/university website, link to realized project).
   */
  links: LinkButton[];
}

export interface TeachingSection extends Section {
  /**
   * List of your teaching activities. Start with the most recent one.
   */
  teaching: Teaching[];
}

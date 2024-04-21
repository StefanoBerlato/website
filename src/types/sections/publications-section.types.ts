import type { LinkButton, Section } from '../shared';

export interface Publications {
  /**
   * List of names of authors.
   */
  authors: string;

  /**
   * Title of the publication.
   */
  title: string;

  /**
   * Description of the venue.
   */
  venue: string;

  /**
   * [WEB] Links related.
   */
  links: LinkButton[];

  /**
   * [WEB] If true, always show the publication, otherwise show only in the complete list of publications.
   */
  selected: boolean;
}

export interface PublicationsSection extends Section {
  /**
   * List of your publications. Start with the most recent one.
   */
  publications: Publications[];
}

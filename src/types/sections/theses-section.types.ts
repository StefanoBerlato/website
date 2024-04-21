import type { LinkButton, Section } from '../shared';

export interface Theses {
  /**
   * List of names of authors.
   */
  authors: string;

  /**
   * Title of the theses.
   */
  title: string;

  /**
   * Description of the university.
   */
  venue: string;

  /**
   * [WEB] Related links.
   */
  links: LinkButton[];
}

export interface ThesesSection extends Section {
  /**
   * List of your supervised theses. Start with the most recent one.
   */
  theses: Theses[];
}

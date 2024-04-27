export interface ArticleConfig {
  type: string;

  filters: {
    limit?: number;
    offset?: number;
  };
}

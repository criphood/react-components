interface ICard {
  created_at: string;
  description: string;
  alt_description: string;
  id: string;
  likes: number;
  tags: Tags;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
    };
  };
}

type Tags = {
  type: string;
  title: string;
  source?: object;
}[];

export default ICard;

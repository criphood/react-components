import Main from './main';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { store } from '../../processes/store/index';
import { Provider } from 'react-redux';

const products = new Response(
  JSON.stringify({
    id: 'l3N9Q27zULw',
    created_at: '2017-12-17T20:34:20Z',
    updated_at: '2023-04-08T18:02:51Z',
    promoted_at: '2017-12-18T14:12:11Z',
    width: 4608,
    height: 3456,
    color: '#f3d9f3',
    blur_hash: 'LWQcM4f5jFogyZbIbHaxVWoIkCae',
    description: null,
    alt_description: 'colored pencil lined up on top of white surface',
    urls: {
      raw: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1513542789411-b6a5d4f31634',
    },
    links: {
      self: 'https://api.unsplash.com/photos/l3N9Q27zULw',
      html: 'https://unsplash.com/photos/l3N9Q27zULw',
      download:
        'https://unsplash.com/photos/l3N9Q27zULw/download?ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ',
      download_location:
        'https://api.unsplash.com/photos/l3N9Q27zULw/download?ixid=Mnw0MzE3ODV8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHwwfHx8MTY4MTAzODQ4MQ',
    },
    likes: 6262,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: '5KvTlhS8W94',
      updated_at: '2023-04-08T09:04:10Z',
      username: 'jessbaileydesigns',
      name: 'Jess Bailey',
      first_name: 'Jess',
      last_name: 'Bailey',
      twitter_username: null,
      portfolio_url: 'http://www.jessbailey.com.au',
      bio: "Hi, I'm Jess. I am a clinical psychologist and part time photographer / designer. I am passionate about little details and minimal styles :)",
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/jessbaileydesigns',
        html: 'https://unsplash.com/@jessbaileydesigns',
        photos: 'https://api.unsplash.com/users/jessbaileydesigns/photos',
        likes: 'https://api.unsplash.com/users/jessbaileydesigns/likes',
        portfolio: 'https://api.unsplash.com/users/jessbaileydesigns/portfolio',
        following: 'https://api.unsplash.com/users/jessbaileydesigns/following',
        followers: 'https://api.unsplash.com/users/jessbaileydesigns/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1590201309621-ac4db59b5b45image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1590201309621-ac4db59b5b45image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1590201309621-ac4db59b5b45image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'jessbailey.com.au',
      total_collections: 12,
      total_likes: 2032,
      total_photos: 263,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'jessbailey.com.au',
        portfolio_url: 'http://www.jessbailey.com.au',
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      { type: 'search', title: 'blog' },
      { type: 'search', title: 'education' },
      {
        type: 'landing_page',
        title: 'design',
        source: {
          ancestry: {
            type: { slug: 'wallpapers', pretty_slug: 'HD Wallpapers' },
            category: { slug: 'design', pretty_slug: 'Design' },
          },
          title: 'Hd design wallpapers',
          subtitle: 'Download free design wallpapers',
          description:
            "Unsplash has the wallpaper design for you, no matter what you're looking for or what your style is. Our images come from a community of passionate professionals, and they are all free to use.",
          meta_title: 'Design Wallpapers: Free HD Download [500+ HQ] | Unsplash',
          meta_description:
            'Choose from hundreds of free design wallpapers. Download HD wallpapers for free on Unsplash.',
          cover_photo: {
            id: 'WmnsGyaFnCQ',
            created_at: '2018-08-27T06:14:28Z',
            updated_at: '2023-03-31T05:05:27Z',
            promoted_at: null,
            width: 5472,
            height: 3648,
            color: '#f3f3f3',
            blur_hash: 'L5P%O.-;00%Mt7xut7M{M{-;WB9F',
            description: null,
            alt_description: 'white cloth lot',
            urls: {
              raw: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
              regular:
                'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              small:
                'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
              thumb:
                'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
              small_s3:
                'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1535350356005-fd52b3b524fb',
            },
            links: {
              self: 'https://api.unsplash.com/photos/WmnsGyaFnCQ',
              html: 'https://unsplash.com/photos/WmnsGyaFnCQ',
              download: 'https://unsplash.com/photos/WmnsGyaFnCQ/download',
              download_location: 'https://api.unsplash.com/photos/WmnsGyaFnCQ/download',
            },
            likes: 2169,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              wallpapers: { status: 'rejected' },
              'textures-patterns': { status: 'approved', approved_on: '2020-04-06T14:20:11Z' },
              monochrome: { status: 'rejected' },
            },
            premium: false,
            user: {
              id: 'M13oDvcQ-2w',
              updated_at: '2023-03-28T03:16:46Z',
              username: 'jjying',
              name: 'JJ Ying',
              first_name: 'JJ',
              last_name: 'Ying',
              twitter_username: 'JJYing',
              portfolio_url: 'https://instagram.com/jjying/',
              bio: 'UI designer, full-time PSholic, part-time CSSer, blogger @ http://TuYueZhi.com , co-host @ Anyway.FM design podcast',
              location: 'Shanghai, China',
              links: {
                self: 'https://api.unsplash.com/users/jjying',
                html: 'https://unsplash.com/@jjying',
                photos: 'https://api.unsplash.com/users/jjying/photos',
                likes: 'https://api.unsplash.com/users/jjying/likes',
                portfolio: 'https://api.unsplash.com/users/jjying/portfolio',
                following: 'https://api.unsplash.com/users/jjying/following',
                followers: 'https://api.unsplash.com/users/jjying/followers',
              },
              profile_image: {
                small:
                  'https://images.unsplash.com/profile-1486092899496-359010a96a9c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                medium:
                  'https://images.unsplash.com/profile-1486092899496-359010a96a9c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                large:
                  'https://images.unsplash.com/profile-1486092899496-359010a96a9c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
              },
              instagram_username: 'jjying',
              total_collections: 10,
              total_likes: 335,
              total_photos: 101,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: 'jjying',
                portfolio_url: 'https://instagram.com/jjying/',
                twitter_username: 'JJYing',
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  })
);

describe('test render main page', () => {
  it('should be input on page', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const search = screen.getByPlaceholderText('Search...');
    expect(search).toBeInTheDocument();
  });

  it('should render first card', async () => {
    const mockFetchPromise = Promise.resolve(products);
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    await waitFor(() => expect(screen.getByTestId('0')).toBeInTheDocument());
  });
});

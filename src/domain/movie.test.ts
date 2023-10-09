import { paginateMovies } from './movie'

const validTestData = {
  total: 4,
  entries: [
    {
      title: 'American History X',
      description:
        'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
      images: {
        posterArt: {
          url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg',
          width: 497,
          height: 736
        }
      },
      releaseYear: 1998
    },
    {
      title: 'Catch Me If You Can',
      description:
        "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
      images: {
        posterArt: {
          url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/catch_me_if_you_can.jpg',
          width: 485,
          height: 719
        }
      },
      releaseYear: 2002
    },
    {
      title: "Pirates of the Caribbean: At World's End",
      description:
        'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
      images: {
        posterArt: {
          url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/pirates_of_the_caribbean.jpg',
          width: 450,
          height: 666
        }
      },
      releaseYear: 2007
    },
    {
      title: 'WALL·E',
      description:
        'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
      images: {
        posterArt: {
          url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/wall_e.jpg',
          width: 500,
          height: 740
        }
      },
      releaseYear: 2008
    }
  ]
}

describe('Paginate movies', () => {
  it('Valid data returns valid response', () => {
    const expectedRes = {
      data: [
        {
          title: 'American History X',
          description:
            'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg',
              width: 497,
              height: 736
            }
          },
          releaseYear: 1998
        },
        {
          title: 'Catch Me If You Can',
          description:
            "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/catch_me_if_you_can.jpg',
              width: 485,
              height: 719
            }
          },
          releaseYear: 2002
        }
      ],
      meta: {
        current_page: 1,
        next_page: 2,
        pre_page: null,
        total_count: 4,
        total_pages: 2
      }
    }
    const res = paginateMovies(validTestData, 1, 2, 'releaseYear', 'ASC')
    expect(JSON.stringify(res)).toBe(JSON.stringify(expectedRes))
  })
  it('Per page is greater than total should return correctly', () => {
    const res = paginateMovies(validTestData, 1, 10, 'releaseYear', 'ASC')
    const expectedRes = {
      data: [
        {
          title: 'American History X',
          description:
            'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg',
              width: 497,
              height: 736
            }
          },
          releaseYear: 1998
        },
        {
          title: 'Catch Me If You Can',
          description:
            "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/catch_me_if_you_can.jpg',
              width: 485,
              height: 719
            }
          },
          releaseYear: 2002
        },
        {
          title: "Pirates of the Caribbean: At World's End",
          description:
            'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/pirates_of_the_caribbean.jpg',
              width: 450,
              height: 666
            }
          },
          releaseYear: 2007
        },
        {
          title: 'WALL·E',
          description:
            'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/wall_e.jpg',
              width: 500,
              height: 740
            }
          },
          releaseYear: 2008
        }
      ],
      meta: {
        current_page: 1,
        next_page: null,
        pre_page: null,
        total_count: 4,
        total_pages: 1
      }
    }
    expect(JSON.stringify(res)).toBe(JSON.stringify(expectedRes))
  })
  it('Invalid page number should return error message', () => {
    const res = paginateMovies(validTestData, 4, 2, 'releaseYear', 'ASC')
    expect(JSON.stringify(res)).toBe(
      JSON.stringify({ error: 'Invalid page number.', data: [], meta: null })
    )
  })
  it('Invalid per_page number should return error message', () => {
    const res = paginateMovies(validTestData, 1, 0, 'releaseYear', 'ASC')
    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        error: 'Invalid per page number.',
        data: [],
        meta: null
      })
    )
  })
  it('Should return sorted result', () => {
    const expectedRes = {
      data: [
        {
          title: "Pirates of the Caribbean: At World's End",
          description:
            'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/pirates_of_the_caribbean.jpg',
              width: 450,
              height: 666
            }
          },
          releaseYear: 2007
        },
        {
          title: 'WALL·E',
          description:
            'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
          images: {
            posterArt: {
              url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/wall_e.jpg',
              width: 500,
              height: 740
            }
          },
          releaseYear: 2008
        }
      ],
      meta: {
        current_page: 2,
        next_page: null,
        pre_page: 1,
        total_count: 4,
        total_pages: 2
      }
    }
    const res = paginateMovies(validTestData, 2, 2, 'releaseYear', 'ASC')
    expect(JSON.stringify(res)).toBe(JSON.stringify(expectedRes))
  })
  it('Invalid sorting method returns error', () => {
    const res = paginateMovies(validTestData, 2, 2, 'releaseYear', 'AC')
    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        error: 'Invalid sorting method AC.',
        data: [],
        meta: null
      })
    )
  })
})

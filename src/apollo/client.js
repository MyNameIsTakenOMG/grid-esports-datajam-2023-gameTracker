import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const fetchTeamInfoQuery = gql`
  query ($seriesId: String!) {
    series(seriesId: $seriesId) {
      teams {
        id
        name
        players {
          id
          name
        }
      }
    }
  }
`;

export const fetchSeriesStatesQuery = gql`
  query ($seriesId: String!) {
    series(seriesId: $seriesId) {
      finished
      format
      started
      id
      teams {
        id
        name
        score
        won
      }
      games {
        sequenceNumber
        map {
          name
        }
        started
        finished
        paused
        teams {
          id
          name
          side
          won
          players {
            id
            name
            character {
              id
              name
            }
            kills
            killAssistsGiven
            deaths
            items {
              id
              equipped
              stashed
            }
            objectives {
              type
              completionCount
            }
          }
        }
        draftActions {
          sequenceNumber
          type
          drafter {
            id
            type
          }
          draftable {
            id
            type
          }
        }
      }
    }
  }
`;

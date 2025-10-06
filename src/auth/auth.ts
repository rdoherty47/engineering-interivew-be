
import { GraphQLError } from "graphql";
import { IncomingMessage } from "http";

/**
 * Super simple "fake" auth - ideally this would be done via JWT authentication
 */
export function getAuthenticatedUser(req: IncomingMessage): string {
    // get the user token from the headers (really just a user ID in this case)
    const token = req.headers.authorization;

    if (!token)
      throw new GraphQLError('User is not authenticated', {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        }
      });

    return token;
}
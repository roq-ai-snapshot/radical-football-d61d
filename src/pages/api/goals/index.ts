import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { goalValidationSchema } from 'validationSchema/goals';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getGoals();
    case 'POST':
      return createGoal();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getGoals() {
    const data = await prisma.goal
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'goal'));
    return res.status(200).json(data);
  }

  async function createGoal() {
    await goalValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.player_goal?.length > 0) {
      const create_player_goal = body.player_goal;
      body.player_goal = {
        create: create_player_goal,
      };
    } else {
      delete body.player_goal;
    }
    const data = await prisma.goal.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}

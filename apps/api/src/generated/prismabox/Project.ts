import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProjectPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    label: t.String(),
    description: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const ProjectRelations = t.Object(
  {
    Deployment: t.Array(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          description: __nullable__(t.String()),
          webhookUrl: t.String(),
          webhookSecret: __nullable__(t.String()),
          projectId: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const ProjectPlainInputCreate = t.Object(
  {
    name: t.String(),
    label: t.String(),
    description: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const ProjectPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    label: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const ProjectRelationsInputCreate = t.Object(
  {
    Deployment: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const ProjectRelationsInputUpdate = t.Partial(
  t.Object(
    {
      Deployment: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const ProjectWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          label: t.String(),
          description: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Project" },
  ),
);

export const ProjectWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              name: t.String(),
              label: t.String(),
              description: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Project" },
);

export const ProjectSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      label: t.Boolean(),
      description: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      Deployment: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProjectInclude = t.Partial(
  t.Object(
    { Deployment: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ProjectOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      label: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Project = t.Composite([ProjectPlain, ProjectRelations], {
  additionalProperties: false,
});

export const ProjectInputCreate = t.Composite(
  [ProjectPlainInputCreate, ProjectRelationsInputCreate],
  { additionalProperties: false },
);

export const ProjectInputUpdate = t.Composite(
  [ProjectPlainInputUpdate, ProjectRelationsInputUpdate],
  { additionalProperties: false },
);

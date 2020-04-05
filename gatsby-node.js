const Promise = require(`bluebird`)
const fetch = require(`node-fetch`)

const showcase = require(`./src/utils/node/showcase.js`)
const sections = [showcase]

exports.createPages = async helpers => {
  await Promise.all(sections.map(section => section.createPages(helpers)))
}

// Create slugs for files, set released status for blog posts.
exports.onCreateNode = helpers => {
  sections.forEach(section => section.onCreateNode(helpers))
}

// XXX this should probably be a plugin or something.
exports.sourceNodes = async ({
  actions: { createTypes, createNode },
  createContentDigest,
  schema,
}) => {
  /*
   * NOTE: This _only_ defines the schema we currently query for. If anything in
   * the query at `src/pages/contributing/events.js` changes, we need to make
   * sure these types are updated as well.
   *
   * But why?! Why would I do something this fragile?
   *
   * Gather round, children, and I’ll tell you the tale of @jlengstorf being too
   * lazy to make upstream fixes...
   */
  const typeDefs = `
    type Fields implements Node {
      slug: String
      hasScreenshot: Boolean
    }

    type SitesYaml implements Node {
      title: String!
      main_url: String!
      url: String!
      source_url: String
      featured: Boolean
      categories: [String]!
      built_by: String
      built_by_url: String
      description: String
      fields: Fields
    }
  `

  createTypes(typeDefs)

  // get data from GitHub API at build time
  const result = await fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    nameWithOwner: resultData.full_name,
    url: resultData.html_url,
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}

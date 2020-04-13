module.exports = {
  siteMetadata: {
    title: 'Trizia Leal',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-less',
    `gatsby-plugin-styled-components`,
  {
    resolve: 'gatsby-plugin-antd',
    options: {
      style: true
    }
  }
]

}

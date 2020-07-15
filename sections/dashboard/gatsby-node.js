exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = 'dashoard/*';
    actions.createPage(page);
  }
};
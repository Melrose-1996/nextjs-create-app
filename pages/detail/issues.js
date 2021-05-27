import withRepo from "../../components/with-repo-basic.jsx";
function Detail({ text }) {
  return <span>Issues pages{text}</span>;
}

Detail.getInitialProps = async () => {
  return {
    text: 123,
  };
};

export default withRepo(Detail, "issues");

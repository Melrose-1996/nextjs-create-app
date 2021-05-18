function Detail() {
  return <span>Detail111</span>;
}

console.log(Detail.prop);

Detail.getInitialProps = () => {
  //   return {
  //     name: "melrose",
  //   };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 3000);
  });
};

export default Detail;

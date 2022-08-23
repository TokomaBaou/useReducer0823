let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>;
};

const ChildPure = ({ value }) => {
  return <div>{value}</div>;
};

export const Example2 = () => {
  let value = 0;
  return (
    <>
      {/* 引数を渡していないのに値が変わってしまう */}
      {/* <Child /> */}
      {/* <Child /> */}
      <ChildPure value={++value} />
    </>
  );
};

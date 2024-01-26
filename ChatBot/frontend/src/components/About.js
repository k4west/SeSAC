const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">About</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">세비 이야기</h2>
        <p className="text-lg">
          2024년 1월 2일, 창동역 앞에서 세비는 태어났어요. 세비는 SeSAC반 개발자 친구들의 공부를 돕기 위해 이 세상에
          나왔답니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Mission</h2>
        <p className="text-lg">세비의 미션은...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">연락처 정보</h2>
        <p className="text-lg">
          질문이 있거나 연락을 원하시면 아래 연락처로 연락해 주세요.
          <a href="kwestmin@gmail.com" style={{ display: "block" }}>
            E-mail: kwestmin@gmail.com
          </a>
          <a href="www.linkedin.com/in/joesavvy" style={{ display: "block" }}>
            LinkedIn: www.linkedin.com/in/joesavvy
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;

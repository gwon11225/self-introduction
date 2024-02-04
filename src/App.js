import { BackGround, Card, Comments, Description, Subtitle, Title} from "./components/styled-component";
import { CommentComponent, Introduction } from "./components/home-components";


function App() {
  return (
    <BackGround>
      <Card>
        <Introduction/>
        <Comments>Comments</Comments>
        <CommentComponent name="Jiyong Gwon" comment="열심히하겠습니다."/>
        <CommentComponent name="Seunghun Seo" comment="대단한 청년."/>
      </Card>
      <Card>
        <Title>TimeBucks</Title>
        <Subtitle>음료, 좌석 예매 서비스</Subtitle>
        <Description>
          카공족으로 인한 카페 사장님들에 대한 손해를 줄이기위해 카페 좌석을 예매하여 정해진 시간 만큼 사용할 수 있도록 하는 프로젝트
        </Description>
      </Card>
    </BackGround>
  );
}

export default App;

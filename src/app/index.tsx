import { Categories } from "@/components/Categories";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

export default function HomeScreen() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </>
  );
}

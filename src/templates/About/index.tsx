import LinkWrapper from "components/LinkWrapper"
import { CloseOutline } from "@styled-icons/evaicons-outline"

import * as S from "./styles"

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My trips</S.Heading>
    <S.Body>
      Laborum adipisicing velit consequat nisi velit cillum. Esse laboris irure nostrud pariatur excepteur commodo dolor. Reprehenderit adipisicing commodo elit cillum dolor. Incididunt pariatur excepteur tempor qui quis pariatur proident adipisicing minim excepteur laborum.
    </S.Body>
  </S.Content>
)

export default AboutTemplate

import styled from 'styled-components'

const HeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`

const HeroContainer = styled.div`
  position: relative;
  color: #eee;
`

const HeroTitle = styled.h2`
  width: 80%;
  margin: 0 20%;
  font-family: Gloock, serif;
  font-size: 48px;
`

const Hero = () => (
  <HeroForm>
    <div className="container">
      <HeroContainer>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </HeroContainer>
    </div>
  </HeroForm>
)

export default Hero
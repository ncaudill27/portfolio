import React from "react";
import styled from "styled-components";

import { DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import Cancel from "./images/iconCancel";
import Heading from "./typography/headingSecondary";
import Button from "./button";

// import { useSpring, useTransition, animated, config } from "@react-spring/web";

const CARBON = {
  json: {
    src:
      "https://carbon.now.sh/embed?bg=rgba%28235%2C249%2C250%2C1%29&t=night-owl&wt=sharp&l=jsx&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Source+Code+Pro&fs=18px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520%2522type%2522%253A%2520%2522root%2522%252C%250A%2520%2520%2522children%2522%253A%2520%255B%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522element%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522tagName%2522%253A%2520%2522p%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522properties%2522%253A%2520%257B%257D%252C%250A%2520%2520%2520%2520%2520%2520%2522children%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522text%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522value%2522%253A%2520%2522Recently%2520I%2520came%2520upon%2520an%2520interesting%2520problem.%2520I%2520wanted%2520to%2520create%2520my%2520blog%2520using%2520%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522element%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522tagName%2522%253A%2520%2522a%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522properties%2522%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522href%2522%253A%2520%2522https%253A%252F%252Fwww.notion.so%252Fproduct%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522children%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522text%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522value%2522%253A%2520%2522Notion%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522text%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522value%2522%253A%2520%2522%2520as%2520the%2520CMS.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%255D%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520...%250A%2520%2520%255D%250A%257D"
  },
  useNotionElement: {
    src:
      "https://carbon.now.sh/embed?bg=rgba%28235%2C249%2C250%2C1%29&t=night-owl&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Source+Code+Pro&fs=18px&lh=133%25&si=false&es=2x&wm=false&code=const%2520useNotionElement%2520%253D%2520blocks%2520%253D%253E%2520%257B%250A%2520%2520let%2520children%253B%250A%250A%2520%2520if%2520%28blocks.type%2520%21%253D%253D%2520%2522text%2522%29%2520%257B%250A%2520%2520%2520%2520children%2520%253D%2520generateChildren%28blocks%29%253B%250A%2520%2520%257D%250A%2520%2520%2520%2520%250A%2520%2520const%2520tagName%2520%253D%2520getTag%28blocks%29%253B%250A%2520%2520const%2520properties%2520%253D%2520handleProperties%28blocks%29%253B%250A%250A%2520%2520return%2520%257B%250A%2520%2520%2520%2520...blocks%252C%2520%252F%252F%2520spread%2520all%2520existing%2520block%2520properties%250A%2520%2520%2520%2520...properties%252C%2520%252F%252F%2520spread%2520updated%2520properties%250A%2520%2520%2520%2520tagName%252C%2520%252F%252F%2520overwrite%2520existing%2520blocks.tagName%250A%2520%2520%2520%2520children%2520%252F%252F%2520overwrite%2520existing%2520blocks.children%250A%2520%2520%257D%253B%250A%257D%253B"
  },
  factory: {
    src:
      "https://carbon.now.sh/embed?bg=rgba%28235%2C249%2C250%2C1%29&t=night-owl&wt=sharp&l=jsx&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Source+Code+Pro&fs=18px&lh=133%25&si=false&es=2x&wm=false&code=const%2520Factory%2520%253D%2520%28%257B%2520blocks%2520%257D%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520element%2520%253D%2520useNotionElement%28blocks%29%253B%250A%2520%2520const%2520%257B%2520value%252C%2520children%252C%2520tagName%2520%257D%2520%253D%2520element%253B%250A%250A%2520%2520%252F%252F%2520Delete%2520properties%2520that%2520shouldn%27t%2520be%2520spread%2520into%2520element%2520as%2520attributes%250A%2520%2520delete%2520element.tagName%253B%250A%2520%2520delete%2520element.type%253B%250A%2520%2520delete%2520element.value%253B%250A%250A%2520%2520switch%2520%28tagName%29%2520%257B%250A%2520%2520%2520%2520case%2520%2522h2%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CPrimaryHeading%2520%257B...element%257D%2520%252F%253E%253B%250A%2509...%250A%2520%2520%2520%2520case%2520%2522root%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253C%253E%257Bchildren%257D%253C%252F%253E%253B%250A%250A%2520%2520%2520%2520default%253A%250A%2520%2520%2520%2520%2520%2520return%2520%2522%2522%253B%250A%2520%2520%257D%250A%257D%253B"
  }
};

const CodeBlock = ({ snippet, name, ...props }) => {
  const { src } = CARBON[snippet];

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  // const transitions = useTransition(isOpen, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: config.gentle
  // });

  // const contentStyles = useSpring({
  //   transform
  // })

  return (
    // <>
    //   <Button variant="outline" onClick={toggleOpen}>Open code snippet</Button>
    //   {transitions(
    //     (styles, item) =>
    //       item && (
    //   <StyledModal
    //     style={{ ...styles }}
    //     isOpen={isOpen}
    //     onDismiss={close}
    //   >
    //     <StyledModalContent style={{ "--max-width": maxWidth }}>
    //       <CloseButton onClick={close}>
    //         <VisuallyHidden>Close {name}</VisuallyHidden>
    //         <Cancel />
    //       </CloseButton>
    //       <Heading>{name}</Heading>
    <StyledCarbonFrame src={src} sandbox="allow-scripts allow-same-origin" {...props} />
    //     </StyledModalContent>
    //   </StyledModal>
    //   )
    //   )}
    // </>
  );
};

const StyledModal = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: none;
  padding-top: var(--spacing-7);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  padding-bottom: var(--spacing-3);
  margin: 0;

  background-color: hsl(183deg, 58%, 95%, 0.85);
  backdrop-filter: blur(5px);
`;

const StyledModalContent = styled(DialogContent)`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  max-width: var(--max-width);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background: transparent;
`;

const StyledCarbonFrame = styled.iframe`
  flex-grow: 1;

  width: 100%;
  height: 50vh;
  border: 0;
  border-radius: 5px;
  transform: scale(1);
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-7);
  right: var(--spacing-1);

  height: 45px;
  width: 45px;
  padding: var(--spacing-0);

  background-color: transparent;
  border: none;
  border-bottom-right-radius: 2px;
  z-index: 1;
`;

export default CodeBlock;

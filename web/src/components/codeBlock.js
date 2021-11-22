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
      "https://carbon.now.sh/embed?bg=rgba%28235%2C249%2C250%2C1%29&t=night-owl&wt=sharp&l=application%2Fjson&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Source+Code+Pro&fs=17px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520%2522type%2522%253A%2520%2522root%2522%252C%250A%2520%2520%2522children%2522%253A%2520%255B%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522element%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522tagName%2522%253A%2520%2522p%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522properties%2522%253A%2520%257B%257D%252C%250A%2520%2520%2520%2520%2520%2520%2522children%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522text%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522value%2522%253A%2520%2522Recently%2520I%2520came%2520upon...%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522element%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522tagName%2522%253A%2520%2522a%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522properties%2522%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522href%2522%253A%2520%2522https%253A%252F%252Fwww.notion.so%252Fproduct%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522children%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522text%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522value%2522%253A%2520%2522Notion%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522type%2522%253A%2520%2522text%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522value%2522%253A%2520%2522%2520as%2520the%2520CMS.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%255D%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520...%250A%2520%2520%255D%250A%257D%250A",
    maxWidth: 589 + "px"
  },
  useNotionElement: {
    src:
      "https://carbon.now.sh/embed?bg=rgba%28235%2C249%2C250%2C1%29&t=night-owl&wt=sharp&l=jsx&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Source+Code+Pro&fs=18px&lh=133%25&si=false&es=2x&wm=false&code=const%2520useNotionElement%2520%253D%2520blocks%2520%253D%253E%2520%257B%250A%2520%2520%250A%2520%2520const%2520%255Belement%252C%2520setElement%255D%2520%253D%2520useState%28%257B%257D%29%253B%250A%250A%2520%2520useEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520let%2520properties%252C%2520tagName%252C%2520children%253B%250A%250A%2520%2520%2520%2520properties%2520%253D%2520handleProperties%28blocks%29%253B%250A%2520%2520%2520%2520tagName%2520%253D%2520getTag%28blocks%29%253B%250A%250A%2520%2520%2520%2520if%2520%28blocks.type%2520%21%253D%253D%2520%2522text%2522%29%2520%257B%250A%2520%2520%2520%2520%2520%2520children%2520%253D%2520generateChildren%28blocks%29%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520setElement%28%257B%250A%2520%2520%2520%2520%2520%2520...blocks%252C%250A%2520%2520%2520%2520%2520%2520...properties%252C%250A%2520%2520%2520%2520%2520%2520tagName%252C%250A%2520%2520%2520%2520%2520%2520children%250A%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%257D%252C%2520%255B%255D%29%253B%250A%250A%2520%2520const%2520handleProperties%2520%253D%2520%28%257B%2520properties%2520%253D%2520%257B%257D%252C%2520tagName%2520%253D%2520%2522%2522%252C%2520children%2520%257D%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520let%2520props%2520%253D%2520%257B%257D%253B%250A%250A%2520%2520%2520%2520if%2520%28properties%2520%2526%2526%2520Object.values%28properties%29.length%2520%253E%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520for%2520%28const%2520property%2520in%2520properties%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520props%255Bproperty%255D%2520%253D%2520properties%255Bproperty%255D%253B%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%252F%252F%2520conditionally%2520add%2520header%2520value%2520as%2520is%2520for%2520table%2520of%2520contents%250A%2520%2520%2520%2520if%2520%28tagName.slice%280%252C%25201%29%2520%253D%253D%253D%2520%2522h%2522%29%2520%257B%250A%2520%2520%2520%2520%2520%2520let%2520id%2520%253D%2520children.length%2520%253E%25200%2520%253F%2520slugify%28children%255B0%255D.value%29%2520%253A%2520null%253B%250A%2520%2520%2520%2520%2520%2520props%2520%253D%2520%257B%2520id%252C%2520as%253A%2520tagName%2520%257D%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520return%2520props%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520const%2520getTag%2520%253D%2520%28%257B%2520type%252C%2520tagName%2520%257D%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520return%2520%21%21tagName%2520%253F%2520tagName%2520%253A%2520type%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520const%2520generateChildren%2520%253D%2520%28%257B%2520children%2520%257D%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520return%2520children.map%28%28child%252C%2520idx%29%2520%253D%253E%2520%253CFactory%2520key%253D%257Bidx%257D%2520blocks%253D%257Bchild%257D%2520%252F%253E%29%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520return%2520element%253B%250A%257D%253B",
    maxWidth: 881 + "px"
  },
  factory: {
    src:
      "https://carbon.now.sh/embed?bg=rgba%28235%2C249%2C250%2C1%29&t=night-owl&wt=sharp&l=jsx&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Source+Code+Pro&fs=18px&lh=133%25&si=false&es=2x&wm=false&code=const%2520Factory%2520%253D%2520%28%257B%2520blocks%2520%257D%29%2520%253D%253E%2520%257B%250A%250A%2520%2520const%2520element%2520%253D%2520useNotionElement%28blocks%29%253B%250A%2520%2520const%2520%257B%2520value%252C%2520children%252C%2520tagName%2520%257D%2520%253D%2520element%253B%250A%250A%2520%2520%252F%252F%2520Delete%2520properties%2520that%2520shouldn%27t%2520be%2520spread%2520into%2520element%2520as%2520attributes%250A%2520%2520delete%2520element.tagName%253B%250A%2520%2520delete%2520element.type%253B%250A%2520%2520delete%2520element.value%253B%250A%250A%2520%2520switch%2520%28tagName%29%2520%257B%250A%2520%2520%2520%2520case%2520%2522h2%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CPrimaryHeading%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522h3%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CSecondaryHeading%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522h4%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CTertiaryHeading%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520paddingTop%253A%2520%2522var%28--spacing-1%29%2522%252C%2520paddingBottom%253A%2520%2522var%28--spacing-0%29%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B...element%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%29%253B%250A%2520%2520%2520%2520case%2520%2522p%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CBody%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522ul%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253Cul%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522li%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CBody%2520as%253D%2522li%2522%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522a%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CLink%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522em%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253Cem%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522u%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253Cspan%2520style%253D%257B%257B%2520textDecoration%253A%2520%2522underline%2522%2520%257D%257D%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522strong%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CStrong%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522code%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CCode%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522div%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253Cdiv%2520%257B...element%257D%2520%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522text%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253C%253E%257Bvalue%257D%253C%252F%253E%253B%250A%2520%2520%2520%2520case%2520%2522codeblock%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253CCodeBlock%2520%257B...element%257D%2520%252F%253E%253B%250A%250A%2520%2520%2520%2520case%2520%2522root%2522%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253C%253E%257Bchildren%257D%253C%252F%253E%253B%250A%250A%2520%2520%2520%2520default%253A%250A%2520%2520%2520%2520%2520%2520return%2520%253C%253ETry%2520again%253C%252F%253E%253B%250A%2520%2520%257D%250A%257D%253B",
    maxWidth: 978 + "px"
  }
};

const CodeBlock = ({ snippet, name }) => {
  const { src, maxWidth } = CARBON[snippet];

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
    <StyledCarbonFrame src={src} sandbox="allow-scripts allow-same-origin" />
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

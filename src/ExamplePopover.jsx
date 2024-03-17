import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Custom popover</Popover.Header>
        <Popover.Body>This is a Bootstrap popover.</Popover.Body>
    </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <a id="popoverButton" className="text-success" href="#" role="button">Example popover</a>
  </OverlayTrigger>
);

function ExamplePopover() {
  return (
    <>
      <Example />
    </>
  )
}

export default ExamplePopover;

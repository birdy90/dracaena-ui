import DuiAccordion from '../components/DuiAccordion';
import DuiAccordionItem from '../components/partials/DuiAccordionItem';
import DuiCode from '../components/DuiCode';
import DuiBadge from '../components/DuiBadge';
import DuiContainer from '../components/layout/DuiContainer';

function Accordion() {
  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Accordion</h2>

      <DuiAccordion>
        <DuiAccordionItem isOpened title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus
          non consectetur. Nullam vitae ligula ut risus sagittis dignissim ut nec purus.
          Phasellus ut leo
          <DuiCode inline>felis</DuiCode>
          . Mauris mi ligula, volutpat eget lacinia vitae, tempus
          non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non elit dapibus
          feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque,
          eu euismod nisi nibh venenatis sapien. Phasellus nec fermentum neque.
        </DuiAccordionItem>
        <DuiAccordionItem title="Praesent ultricies nec metus non consectetur" badge={<DuiBadge value={23} pulsating />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
        </DuiAccordionItem>
        <DuiAccordionItem title="Sed vel mauris efficitur, finibus risus at, cursus dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue.
          Nulla blandit non elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis
          neque, eu euismod nisi nibh venenatis sapien. Phasellus nec fermentum neque.
          Suspendisse tempus velit auctor purus feugiat, eget auctor justo posuere. Sed vel mauris efficitur,
          finibus risus at, cursus dolor. Fusce ut sodales velit, id tempor felis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur vitae ligula eu urna hendrerit semper congue id ipsum. Duis
          in mi felis. In ac enim posuere, porta purus ut, porta nunc. Sed sed purus sed velit sollicitudin
          finibus. Etiam porta, purus vitae consectetur pretium, enim neque mollis lectus, in egestas leo justo
          consectetur justo. Sed ac risus lectus. Suspendisse convallis mauris eu pharetra finibus. Quisque
          sagittis nulla sed pharetra tempor. Praesent laoreet lorem nisi, non efficitur felis venenatis sit amet.
        </DuiAccordionItem>
      </DuiAccordion>

      <h2>Accordion with single item</h2>

      <DuiAccordion single>
        <DuiAccordionItem isOpened title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
        </DuiAccordionItem>
        <DuiAccordionItem title="Praesent ultricies nec metus non consectetur">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
        </DuiAccordionItem>
        <DuiAccordionItem title="Sed vel mauris efficitur, finibus risus at, cursus dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nec metus non consectetur.
          Nullam vitae ligula ut risus sagittis dignissim ut nec purus. Phasellus ut leo felis. Mauris mi ligula,
          volutpat eget lacinia vitae, tempus non nulla. Sed quis rutrum ante, vel mattis augue. Nulla blandit non
          elit dapibus feugiat. Aliquam vulputate, elit eu finibus venenatis, velit urna mollis neque, eu euismod
          nisi nibh venenatis sapien. Phasellus nec fermentum neque.
          Suspendisse tempus velit auctor purus feugiat, eget auctor justo posuere. Sed vel mauris efficitur,
          finibus risus at, cursus dolor. Fusce ut sodales velit, id tempor felis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur vitae ligula eu urna hendrerit semper congue id ipsum. Duis in
          mi felis. In ac enim posuere, porta purus ut, porta nunc. Sed sed purus sed velit sollicitudin finibus.
          Etiam porta, purus vitae consectetur pretium, enim neque mollis lectus, in egestas leo justo consectetur
          justo. Sed ac risus lectus. Suspendisse convallis mauris eu pharetra finibus. Quisque sagittis nulla
          sed pharetra tempor. Praesent laoreet lorem nisi, non efficitur felis venenatis sit amet.
        </DuiAccordionItem>
      </DuiAccordion>
    </DuiContainer>
  );
}

export default Accordion;

import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
export default function Hero({ data }) {
  console.log(data);
  return (
    <div className="p-24">
      <h4 className="text-lg">Manjunath Kalburgi</h4>
      <div>
        <h3>
          Building
          <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">
              Passive income ideas
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent" sideOffset={5}>
                Some more info…
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">
              | All in One other cool things
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent" sideOffset={5}>
                Some more info…
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </h3>
      </div>

      <p>
        {data && data.bio ? data.bio : ''}Find me on Twitter for tech updates
        and memes.
      </p>
      <button type="button" className="primary-button p-5 mt-10 bg-blue-100">
        Know More
      </button>
    </div>
  );
}

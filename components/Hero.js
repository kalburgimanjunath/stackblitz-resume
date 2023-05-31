import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
export default function Hero({ data }) {
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
                <img
                  src="https://picsum.photos/200/300"
                  style={{ width: 200, height: 300 }}
                />
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
                <ul>
                  <li>Founder: @Sensvio App</li>
                  <li>
                    Mentorinig:
                    <Link href="https://www.codementor.io/@manjunathkalburgi490">
                      @codementor
                    </Link>
                    <Link href="https://www.codementor.io/@manjunathkalburgi490">
                      @MentorCruise
                    </Link>
                  </li>
                  <li>Helping Frontend Developer : </li>
                  <li>Web Templates and Components: @mywebkit</li>
                  <li>Blogs: @myblog</li>
                  <li>Tech videos and snippets: @youtube</li>
                </ul>
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

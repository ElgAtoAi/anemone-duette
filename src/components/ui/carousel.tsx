import { createContext, useContext, createSignal, createEffect, onCleanup, mergeProps, splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-solid';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

type CarouselComponentProps = JSX.HTMLAttributes<HTMLDivElement> & CarouselProps;

const Carousel = (props: CarouselComponentProps) => {
  const merged = mergeProps({ orientation: 'horizontal' }, props);
  const [local, rest] = splitProps(merged, ["orientation", "opts", "setApi", "plugins", "class", "children", "ref"]);

  const [carouselRef, api] = useEmblaCarousel(
    () => ({
      ...local.opts,
      axis: local.orientation === 'horizontal' ? 'x' : 'y',
    }),
    () => local.plugins
  );

  const [canScrollPrev, setCanScrollPrev] = createSignal(false);
  const [canScrollNext, setCanScrollNext] = createSignal(false);

  const onSelect = (emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return;
    }
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  };

  createEffect(() => {
    if (!api || !local.setApi) {
      return;
    }
    local.setApi(api);
  });

  createEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    onCleanup(() => {
      api?.off('select', onSelect);
    });
  });

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts: local.opts,
        orientation: local.orientation || (local.opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={local.ref}
        onKeyDownCapture={handleKeyDown}
        class={cn('relative', local.class)}
        role="region"
        aria-roledescription="carousel"
        {...rest}
      >
        {local.children}
      </div>
    </CarouselContext.Provider>
  );
};

type CarouselContentProps = JSX.HTMLAttributes<HTMLDivElement>;

const CarouselContent = (props: CarouselContentProps) => {
  const [local, rest] = splitProps(props, ["class", "ref"]);
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} class="overflow-hidden">
      <div
        ref={local.ref}
        class={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          local.class
        )}
        {...rest}
      />
    </div>
  );
};

type CarouselItemProps = JSX.HTMLAttributes<HTMLDivElement>;

const CarouselItem = (props: CarouselItemProps) => {
  const [local, rest] = splitProps(props, ["class", "ref"]);
  const { orientation } = useCarousel();

  return (
    <div
      ref={local.ref}
      role="group"
      aria-roledescription="slide"
      class={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        local.class
      )}
      {...rest}
    />
  );
};

type ButtonProps = JSX.ComponentProps<typeof Button>;

const CarouselPrevious = (props: ButtonProps) => {
  const merged = mergeProps({ variant: 'outline', size: 'icon' }, props);
  const [local, rest] = splitProps(merged, ["class", "variant", "size", "ref"]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={local.ref}
      variant={local.variant}
      size={local.size}
      class={cn(
        'absolute  h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        local.class
      )}
      disabled={!canScrollPrev()}
      onClick={scrollPrev}
      {...rest}
    >
      <ArrowLeft class="h-4 w-4" />
      <span class="sr-only">Previous slide</span>
    </Button>
  );
};

const CarouselNext = (props: ButtonProps) => {
  const merged = mergeProps({ variant: 'outline', size: 'icon' }, props);
  const [local, rest] = splitProps(merged, ["class", "variant", "size", "ref"]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={local.ref}
      variant={local.variant}
      size={local.size}
      class={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        local.class
      )}
      disabled={!canScrollNext()}
      onClick={scrollNext}
      {...rest}
    >
      <ArrowRight class="h-4 w-4" />
      <span class="sr-only">Next slide</span>
    </Button>
  );
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
import { bind } from '@/core/styles/bind';
import styles from './horizontal-scroll.module.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@/core/icons';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
const cn = bind(styles);

interface Props {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  marginOffset?: number;
}

export const HorizontalScroll = (props: Props) => {
  const { children, className = '', gap = 8, marginOffset = 0 } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const GAP_SPACE = (React.Children.count(children) * gap) / 2;
  const [translate, setTranslate] = useState(0);
  const [isGoLeftDisabled, setIsGoLeftDisabled] = useState(false);
  const [isGoRightDisabled, setIsGoRightDisabled] = useState(false);

  const getIsGoLeftDisabled = () => translate === 0;
  const getIsGoRightDisabled = () => {
    if (listRef?.current && wrapperRef?.current) {
      return (
        translate <= listRef.current?.offsetWidth * -1 + wrapperRef.current?.offsetWidth + GAP_SPACE ||
        listRef.current?.offsetWidth < wrapperRef.current?.offsetWidth
      );
    } else return false;
  };

  const goLeft = () => {
    if (!wrapperRef.current || !wrapperRef.current.offsetWidth) return;
    const availableSpace = wrapperRef.current.offsetWidth - GAP_SPACE;
    setTranslate((prev) => Math.min(prev + availableSpace, 0));
  };
  const goRight = () => {
    if (!wrapperRef.current || !wrapperRef.current.offsetWidth) return;
    const availableSpace = wrapperRef.current.offsetWidth - GAP_SPACE - 48 * 2;
    setTranslate((prev) => prev - availableSpace);
  };

  useEffect(() => {
    setIsGoLeftDisabled(getIsGoLeftDisabled());
    setIsGoRightDisabled(getIsGoRightDisabled());
  }, [translate]);

  return (
    <div
      className={cn('horizontal-scroll-wrapper', className)}
      style={{ marginLeft: `${marginOffset}px`, marginRight: `${marginOffset}px` }}
      ref={wrapperRef}
    >
      <button className={cn('arrow-button', 'arrow-button--left')} onClick={goLeft} disabled={isGoLeftDisabled}>
        <ArrowLeftIcon />
      </button>
      <div
        ref={listRef}
        className={cn('horizontal-scroll')}
        style={{
          transform: `translateX(${translate}px)`,
          gap: `${gap}px`,
        }}
      >
        {children}
      </div>
      <button className={cn('arrow-button', 'arrow-button--right')} onClick={goRight} disabled={isGoRightDisabled}>
        <ArrowRightIcon />
      </button>
    </div>
  );
};

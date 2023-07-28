import React, { useEffect, useState } from 'react';
import './carousel.css';
import { CarouselModel } from './Types';
import { DiGithubBadge } from "@react-icons/all-files/di/DiGithubBadge";
import { DiGithubFull } from "@react-icons/all-files/di/DiGithubFull";
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';

type Props = {
  data: CarouselModel[];
  autoPlay?: boolean;
  size?: 'normal' | 'large';
  headerTextType?: 'black' | 'white';
  subTextType?: 'black' | 'white';
  animationDuration?: 1 | 2 | 3 | number;
  leftItem?:
    | React.ReactHTMLElement<HTMLElement>
    | React.ReactNode
    | React.ReactChild;
  rightItem?:
    | React.ReactHTMLElement<HTMLElement>
    | React.ReactNode
    | React.ReactChild;
};

export const Carousel = ({
  data,
  autoPlay = true,
  size = 'normal',
  headerTextType = 'black',
  subTextType = 'white',
  animationDuration = 3,
  leftItem,
  rightItem,
}: Props) => {
  const [activeItem, setActiveItem] = useState<number>(data.length > 2 ? 1 : 0);
  const [onDragState, setOnDragState] = useState(0);

  useEffect(() => {
    autoPlay &&
      setTimeout(() => {
        handleNextSlide(true);
      }, animationDuration * 1000);
  }, [activeItem]);
  const handleNextSlide = (increase: boolean) => {
    if (increase) {
      if (activeItem + 1 > data.length - 1) {
        setActiveItem(0);
      } else {
        setActiveItem(activeItem + 1);
      }
    } else {
      if (activeItem === 0) {
        setActiveItem(data.length - 1);
      } else {
        setActiveItem(activeItem - 1);
      }
    }
  };

  const onDragEnded = (e: React.DragEvent) => {
    if (e.clientX - onDragState < 150) {
      handleNextSlide(true);
    } else if (e.clientX - onDragState > 400) {
      handleNextSlide(false);
    }
  };

  const onDragStarted = (e: React.DragEvent) => setOnDragState(e.clientX);
  return (
    <div
      className={`container ${
        size === 'normal' ? 'container-normal' : 'container-large'
      }`}
    >
      {data.map((item, index) => (
        <div
          className={`inner ${
            index === activeItem
              ? 'active-item'
              : index === activeItem + 1
              ? 'right-active-item'
              : index === activeItem - 1 && activeItem !== 0
              ? 'left-active-item'
              : 'inactive-items'
          }`}
          key={index}
          onDragStart={onDragStarted}
          onDragEnd={onDragEnded}
        >
          <a href={item.previewLink} target={'_blank'}> </a>
          <video className={'image'} width="100%" loop autoPlay={autoPlay} muted>
            <source src={item.video} type="video/mp4" className={`image ${ size === 'normal' ? 'image-normal' : 'image-large' }`} />
          </video>
            <div className="badge-container">
              {item.githubLink && (
                  <div className={'badge sub-text'}>
                    <a href={item.githubLink} target={'_blank'}>
                      <DiGithubBadge/>
                      <DiGithubFull/>
                    </a>
                  </div>
              )}
              {item.previewLink && (
                  <div className={'badge badge-preview sub-text'}>
                    <a href={item.previewLink} target={'_blank'}>
                      <p>
                        <BiLinkExternal/>
                        preview</p>
                    </a>
                  </div>
              )}
            </div>
            <>
              {leftItem ? (
                <div
                    onClick={() => handleNextSlide(false)}
                    className={"custom-item left" + (activeItem === index ? " disabled" : "")}
                >
                  {/*{leftItem}*/}
                </div>
              ) : (
                <span className="default-item" onClick={() => handleNextSlide(false)} > ← </span>
              )}
              {rightItem ? (
                <div
                    onClick={() => handleNextSlide(true)}
                    className={"custom-item right" + (activeItem === index ? " disabled" : "")}
                >
                  {/*{rightItem}*/}
                </div>
              ) : (
                <span className="default-item" onClick={() => handleNextSlide(true)} > → </span>
              )}
            </>
        </div>
      ))}
    </div>
  );
};

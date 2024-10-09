import { HorizontalScroll } from '@/core/components/horizontal-scroll/horizontal-scroll.component';
import styles from './gift-card.module.css';
import { bind } from '@/core/styles/bind';
import { Gift } from '@/features/gift-list/domain/gift-list';
import { ArrowOutwardIcon, LinkIcon } from '@/core/icons';
const cn = bind(styles);

interface Props {
  gift: Gift;
}

export const GiftCard = (props: Props) => {
  const { gift } = props;
  return (
    <div className={cn('gift-card')}>
      <p className={cn('gift-card__name')}>
        {gift.name} <ArrowOutwardIcon />
      </p>
      {gift.urls && (
        <div className={cn('gift-card__urls')}>
          {gift.urls.map(({ url, label }) => (
            <a key={url} href={url} target="_blank" className={cn('gift-card__urls__url')}>
              <LinkIcon size={12} /> {label}
            </a>
          ))}
        </div>
      )}
      {gift.description && <p className={cn('gift-card__description')}>{gift.description}</p>}
      {gift.pictureUrls && (
        <HorizontalScroll className={cn('gift-card__images')} marginOffset={-24}>
          {gift.pictureUrls.map((pictureUrl) => (
            <img key={pictureUrl} className={cn('gift-card__images__img')} src={pictureUrl} />
          ))}
        </HorizontalScroll>
      )}
    </div>
  );
};

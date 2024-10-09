import { bind } from '@/core/styles/bind';
import styles from './gift-list.module.css';
import { GiftList } from '@/features/gift-list/domain/gift-list';
import { GiftListMother } from '@/features/gift-list/domain/gift-list.mother';
import { GiftCard } from '../../components/gift-card/gift-card.component';
const cn = bind(styles);

export const GiftListPage = () => {
  const giftList: GiftList = GiftListMother.giftList();
  const getInitials = (name: string) =>
    name
      .split(' ')
      .reduce((prev, current) => prev + current[0], '')
      .slice(0, 2);
  return (
    <div className={cn('gift-list')}>
      <div className={cn('gift-list__header')}>
        <div className={cn('gift-list__header__owner')}>{getInitials(giftList.owner.name)}</div>
        <h2 className={cn('gift-list__header__title')}>{giftList.name}</h2>
      </div>
      {giftList.description && <p className={cn('gift-list__description')}>{giftList.description}</p>}
      <ul className={cn('gift-list__gifts')}>
        {giftList.gifts.map((gift) => (
          <li key={gift.id}>
            <GiftCard gift={gift} />
          </li>
        ))}
      </ul>
    </div>
  );
};

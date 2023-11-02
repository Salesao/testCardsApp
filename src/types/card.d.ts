export type TTypeCard = 'ALL' | 'TASKS' | 'CORSES';

export type TNullOrAny<T> = T | null;

export interface ICard {
	card_id?: number;
	reviewer_id: number;
	name: string;
	reward: number;
	photo_required?: boolean;
	video_required: boolean;
	schedule?: TNullOrAny<boolean[]>;
	period_start: TNullOrAny<string>;
	period_stop: TNullOrAny<string>;
	type: TTypeCard;
	description: TNullOrAny<string>;
	every_month: TNullOrAny<boolean>;
}

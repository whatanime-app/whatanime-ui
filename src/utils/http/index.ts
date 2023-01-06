import { animeChanApi, AnimeChanResource } from './animeChanResource';
import { jikanApi, JikanResource } from './jikanResource';

const AnimesResource = new JikanResource();
const QuotesResource = new AnimeChanResource();

export { animeChanApi, AnimesResource, jikanApi, QuotesResource };

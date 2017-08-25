import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { ExampleApplication  as App }  from './App';

const root = document.querySelector('my-app') || undefined;

const Projector = ProjectorMixin(App);
const projector = new Projector();
const start = new Date().getTime();
projector.__setProperties__({ elapsed: new Date().getTime() - start });

function update() {
	projector.__setProperties__({ elapsed: new Date().getTime() - start });
	requestAnimationFrame(update);
}

requestAnimationFrame(update);

projector.append(root);

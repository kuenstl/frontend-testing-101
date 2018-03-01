import "jest-preset-angular";

import * as toMatchImageSnapshot from  "jest-image-snapshot";

(expect as any).extend({ toMatchImageSnapshot });

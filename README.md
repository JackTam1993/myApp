# myApp
This project is to test the performance improvement that bindonce brings. And it just an ionic-init project.

OK,let us use Chinese.

在 https://github.com/Pasvaz/bindonce 中提到，当我们滥用Angular中方便的数据绑定的功能时，可能会导致一些性能问题。在我们的SPA中，Angular令我们很方便地实现视图和数据同步更新的功能，但是我们稍不小心就会导致加载过多watcher的情况，而当watcher的数量超过2000时很可能会导致页面的加载的滞后，而bind once提供了方法，以指令的方式去除视图中不需监视的的元素，从而提高页面的性能。由于ng-和bo-的指令基本上能够对应得上，所以使用起来也没有太大的难度，如果想定量地观察watcher的变化的话可以使用Chrome里面的Batarang工具。

install dependencies : npm install & bower install & npm ionic cordova -g.

run on browser : ionic serve.

And this is a cordova based project, so you can build it in a cordova way.

Thank you for watching.

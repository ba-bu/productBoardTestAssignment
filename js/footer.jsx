/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoFooter = React.createClass({
		render: function () {
			var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}
						data-test={'clearCompleted'}
					>
						Clear completed
					</button>
				);
			}

			// React idiom for shortcutting to `classSet` since it'll be used often
			var cx = React.addons.classSet;
			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count" data-test={'counter'}>
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className={cx({selected: nowShowing === app.ALL_TODOS})}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={cx({selected: nowShowing === app.ACTIVE_TODOS})}
								data-test={'activeFilter'}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={cx({selected: nowShowing === app.COMPLETED_TODOS})} 
								data-test={'completeFilter'}>
									Completed
							</a>
						</li>
					</ul>
					{clearButton}
				</footer>
			);
		}
	});
})();

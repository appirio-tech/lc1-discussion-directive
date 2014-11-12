
# lc-discussion directive


***lc-discussion directive displays the discussion messages in a challenge.***


### Deployment

To deploy <lc-discussion> to other projects, please follow these instructions.

* Copy the `client/lc-discussion-directive` folder to the project.
* Include the `lc-discussion-service.js` and `lc-discussion-directive.js` in the main template. Depending on the folder structure, please set the correct path for both files, make sure they are downloaded in the browser.
* Set the correct path for the `lc-discussion.tpl.html` at the bottom of `lc-discussion-directive.js`.
* Inject or get the URL of discussion service, set it to the `disucssion-url` attribute of lc-discussion directive.

### Directive Attributes

The <lc-discussion> accepts two attributes.

* remote-object-key: the key of remote object, ex) challenge.
* remote-object-id: the id of remote object, ex: the id of challenge record.
* discussion-url: the scope variable that has the URL of discussion service
	

### Usage

Place <lc-discussion> with remote-object-key, remote-object-id and discussion-url attributes to the HTML. Here the `discussionUrl` is the variable name in the parent scope.

	<lc-discussion remote-object-key="challenge" remote-object-id="123" discussion-url="discussionUrl"></lc-discussion>



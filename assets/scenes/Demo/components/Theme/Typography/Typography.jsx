import React, { Component } from 'react';

class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            Headings
          </div>
          <div className="card-body">
            <p>
              Documentation and examples for Bootstrap typography, including global settings,
              headings, body text, lists, and more.
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Heading</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
                  </td>
                  <td><span className="h1">h1. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
                  </td>
                  <td><span className="h2">h2. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
                  </td>
                  <td><span className="h3">h3. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
                  </td>
                  <td><span className="h4">h4. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
                  </td>
                  <td><span className="h5">h5. Bootstrap heading</span></td>
                </tr>
                <tr>
                  <td>
                    <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
                  </td>
                  <td><span className="h6">h6. Bootstrap heading</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Headings
          </div>
          <div className="card-body">
            <p>
              <code className="highlighter-rouge">.h1</code>&nbsp;
              through&nbsp;
              <code className="highlighter-rouge">.h6</code>&nbsp;
              classes are also available, for when you want to match the font styling of a
              heading but cannot use the associated HTML element.
            </p>
            <div className="bd-example">
              <p className="h1">h1. Bootstrap heading</p>
              <p className="h2">h2. Bootstrap heading</p>
              <p className="h3">h3. Bootstrap heading</p>
              <p className="h4">h4. Bootstrap heading</p>
              <p className="h5">h5. Bootstrap heading</p>
              <p className="h6">h6. Bootstrap heading</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Display headings
          </div>
          <div className="card-body">
            <p>
              Traditional heading elements are designed to work best in the meat of your page
              content. When you need a heading to stand out, consider using a
              <strong>display heading</strong>—a larger, slightly more opinionated heading style.
            </p>
            <div className="bd-example bd-example-type">
              <table className="table">
                <tbody>
                  <tr>
                    <td><span className="display-1">Display 1</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-2">Display 2</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-3">Display 3</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-4">Display 4</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Inline text elements
          </div>
          <div className="card-body">
            <p>
              Traditional heading elements are designed to work best in the meat of your page
              content. When you need a heading to stand out, consider using a
              <strong>display heading</strong>—a larger, slightly more opinionated heading style.
            </p>
            <div className="bd-example">
              <p>You can use the mark tag to <mark>highlight</mark> text.</p>
              <p>
                <del>This line of text is meant to be treated as deleted text.</del>
              </p>
              <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p>
                <ins>This line of text is meant to be treated as an addition to the document.</ins>
              </p>
              <p><u>This line of text will render as underlined</u></p>
              <p>
                <small>This line of text is meant to be treated as fine print.</small>
              </p>
              <p><strong>This line rendered as bold text.</strong></p>
              <p><em>This line rendered as italicized text.</em></p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Description list alignment
          </div>
          <div className="card-body">
            <p>
              Align terms and descriptions horizontally by using our grid system’s predefined
              classes (or semantic mixins). For longer terms, you can optionally add a
              <code className="highlighter-rouge">.text-truncate</code>
              class to truncate the text with an ellipsis.
            </p>
            <div className="bd-example">
              <dl className="row">
                <dt className="col-sm-3">
                  Description lists
                </dt>
                <dd className="col-sm-9">
                  A description list is perfect for defining terms.
                </dd>

                <dt className="col-sm-3">
                  Pastrami
                </dt>
                <dd className="col-sm-9">
                  <p>
                    Bacon ipsum dolor amet porchetta swine capicola beef landjaeger elit.
                  </p>
                  <p>
                    Kielbasa, prosciutto boudin tongue beef ribs filet mignon.
                  </p>
                </dd>

                <dt className="col-sm-3">
                  Pork belly
                </dt>
                <dd className="col-sm-9">
                  Cupim sirloin cow pork
                </dd>

                <dt className="col-sm-3 text-truncate">
                  Turducken strip steak spare ribs hamburger
                </dt>
                <dd className="col-sm-9">
                  Rump drumstick prosciutto venison alcatra porchetta shankle
                  shank. Alcatra ground round buffalo.
                </dd>

                <dt className="col-sm-3">
                  Nesting
                </dt>
                <dd className="col-sm-9">
                  <dl className="row">
                    <dt className="col-sm-4">
                      Nested definition list
                    </dt>
                    <dd className="col-sm-8">
                      belly shankle pancetta, pork loin ham venison landjaeger tenderloin
                    </dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Typography;

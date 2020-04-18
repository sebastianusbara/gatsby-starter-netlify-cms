import React from 'react';
import { Link } from 'gatsby';

const footerContact = [
    {
        label: 'Call Us 512-85-Ninja'
    },
    {
        label: 'Help Support'
    },
    {
        label: 'Email us at sales@quoteninja.com'
    }
];

const footerQuote = [
    {
        label: 'About Us'
    },
    {
        label: 'Pricing'
    },
    {
        label: 'Contacts'
    },
    {
        label: 'RoadMap'
    }
];

const footerResources = [
    {
        label: 'Fully Integrated w/ BigCommerce'
    },
    {
        label: 'Single Click Quote to Order'
    },
    {
        label: 'Seamless Customer Checkout from Quote'
    },
    {
        label: 'All your quotes in one dashboard'
    },
    {
        label: 'PDF Quote Creation & File Attachments'
    },
    {
        label: 'Support for Advanced Product Types'
    }
];

const footerOthers = [
    {
        label: 'Time Sensitive Quotes'
    },
    {
        label: 'Quote Conversion Tracking'
    },
    {
        label: 'Mobile Optimized'
    },
    {
        label: 'Emailed Notifications'
    },
    {
        label: 'International Support'
    }
];

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
            <div className="container">
                <div className="content__nav">
                    <div className="columns">
                        <div className="column is-3">
                            <section className="menu">
                                <h3 className="footerHeading">
                                    Questions or Need Help
                                </h3>
                                {footerContact.map(footer => (
                                    <Link to="/" className="navbar-item">
                                        {footer.label}
                                    </Link>
                                ))}
                            </section>
                        </div>
                        <div className="column is-2">
                            <h3 className="footerHeading">
                                Quote Ninja
                            </h3>
                            {footerQuote.map(footer => (
                                <Link to="/" className="navbar-item">
                                    {footer.label}
                                </Link>
                            ))}
                        </div>
                        <div className="column is-4">
                            <h3 className="footerHeading">
                                Resources
                            </h3>
                            {footerResources.map(footer => (
                                <Link to="/" className="navbar-item">
                                    {footer.label}
                                </Link>
                            ))}
                        </div>
                        <div className="column is-3">
                            {footerOthers.map(footer => (
                                <Link to="/" className="navbar-item">
                                    {footer.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="content__credit">
                    ok
                </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer

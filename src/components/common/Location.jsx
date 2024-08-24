/* eslint-disable no-unused-vars */
import React from 'react';

const Location = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '1rem', 
            marginBottom: '1rem',
            flexWrap: 'wrap' // Ensure elements wrap on smaller screens
        }}>
            <div style={{ 
                flex: '1 1 300px', // Allows flexible width with a minimum of 300px
                marginRight: '1rem',
                textAlign: 'center',
                marginBottom: '1rem' // Margin for mobile view when stacked
            }}>
                <h2 style={{ marginBottom: '10px' }}>Luna Vista Hotel</h2>
                <p style={{ fontSize: '18px', color: '#555', fontStyle: 'italic' }}>
                    Calamba, 4027 Laguna, Philippines
                </p>
            </div>
            <div style={{ 
                flex: '1 1 400px', // Allows flexible width with a minimum of 400px
                height: '300px',
                maxWidth: '100%' 
            }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.2486451425625!2d121.18528507501489!3d14.180209786257851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6145c5892bd9%3A0x4fcae94393e9a4fe!2sLuna%20Vista%20Resort!5e0!3m2!1sen!2sin!4v1724411898663!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;

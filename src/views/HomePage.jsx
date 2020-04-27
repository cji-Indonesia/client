import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Banner from '../components/UI/Banner/Banner';
import ContentText from '../components/UI/ContentText/ContentText';
import Card from '../components/UI/Card/Card';
import styles from '../css/Homepage.module.css';

class Homepage extends Component {
    render () {
        return (
            <Aux>
                <section>
                    <Banner 
                        title="IMPROVE YOUR ENGLISH"
                        text="Feel the comfort of learning English with English Today,
                        Wherever and whenever, without space and time restrictions." />
                </section>
                <section>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <ContentText
                                title="English Today Online Training"
                                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged." />
                        </div>
                        <div className={styles.row}>
                            <Card
                                title="Flexibility" 
                                text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested" />
                            <Card
                                title="Personalisation" 
                                text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested" />
                            <Card
                                title="Affordability" 
                                text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested" />
                        </div>
                    </div>
                </section>
            </Aux>
        );
    }
}

export default Homepage;
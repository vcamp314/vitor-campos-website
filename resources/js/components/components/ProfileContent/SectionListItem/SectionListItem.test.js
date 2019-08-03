import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SectionListItem from './SectionListItem';
import ToggleableSection from '../../../components/Filter/ToggleableSection/ToggleableSection';
import ExpandableItemList from './ExpandableItemList/ExpandableItemList';
import RegularItemList from './RegularItemList/RegularItemList';


configure({ adapter: new Adapter() });

describe('<SectionListItem />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SectionListItem listName="responsibilities" section={
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res022",
                        "description": "Programmed a cgi protocol plugin",
                        "tags": ["C", "cgi protocol"]
                    }
                ]
            }} />);
    });
    it('should contain 1 <RegularItemList /> with data that has 1 responsibility with no details', () => {
        expect(wrapper.find(RegularItemList)).toHaveLength(1);
    })

    it('should contain 1 <ExpandableItemList /> with data that has 1 responsibility with details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det005",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    }
                ]
            }
        });
        expect(wrapper.find(ExpandableItemList)).toHaveLength(1);
    });
    it('should contain 1 <ExpandableItemList /> with data that has 2 responsibilities with details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det005",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res010",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    }
                ]
            }
        });
        expect(wrapper.find(ExpandableItemList)).toHaveLength(1);
    });
    it('should contain 1 <RegularItemList /> with data that has 2 responsibilities without details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false
                    },
                    {
                        "id": "res010",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false
                    }
                ]
            }
        });
        expect(wrapper.find(RegularItemList)).toHaveLength(1);
    });
    it('should contain 1 <ExpandableItemList /> with data that has 4 responsibilities with 2 subsequent items with details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det005",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res010",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"],
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res030",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"]
                    },
                    {
                        "id": "res011",
                        "description": "Prepared complete training program",
                        "tags": ["Training"]
                    }
                ]
            }
        });
        expect(wrapper.find(ExpandableItemList)).toHaveLength(1);
    });
    it('should contain 1 <RegularItemList /> with data that has 4 responsibilities with 2 subsequent items without details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det005",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res010",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"],
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res030",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"]
                    },
                    {
                        "id": "res011",
                        "description": "Prepared complete training program",
                        "tags": ["Training"]
                    }
                ]
            }
        });
        expect(wrapper.find(RegularItemList)).toHaveLength(1);
    });
    it('should contain 1 <RegularItemList /> with data that has 2 responsibilities where only the first item has no details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false
                    },
                    {
                        "id": "res010",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"],
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    }
                ]
            }
        });
        expect(wrapper.find(RegularItemList)).toHaveLength(1);
    });
    it('should contain 1 <ExpandableItemList /> with data that has 2 responsibilities where only the first item has no details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false
                    },
                    {
                        "id": "res010",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"],
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    }
                ]
            }
        });
        expect(wrapper.find(ExpandableItemList)).toHaveLength(1);
    });
    it('should contain 2 <ExpandableItemList /> with data that has 4 responsibilities with every other item having details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det005",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res010",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"]
                    },
                    {
                        "id": "res030",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"],
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res011",
                        "description": "Prepared complete training program",
                        "tags": ["Training"]
                    }
                ]
            }
        });
        expect(wrapper.find(ExpandableItemList)).toHaveLength(2);
    });
    it('should contain 2 <RegularItemList /> with data that has 4 responsibilities with every other item having details', () => {
        wrapper.setProps({
            section:
            {
                "id": "sec04",
                "tags": ["Initiative"],
                "responsibilities": [
                    {
                        "id": "res009",
                        "description": "Led teams",
                        "tags": ["Leadership"],
                        "isExpanded": false,
                        "details": [
                            {
                                "id": "det005",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res010",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"]
                    },
                    {
                        "id": "res030",
                        "description": "Comfortably handled",
                        "tags": ["Business Requirements"],
                        "details": [
                            {
                                "id": "det006",
                                "description": "Coordinated between key players",
                                "tags": ["Customer Facing", "Business Requirements"]
                            }
                        ]
                    },
                    {
                        "id": "res011",
                        "description": "Prepared complete training program",
                        "tags": ["Training"]
                    }
                ]
            }
        });
        expect(wrapper.find(RegularItemList)).toHaveLength(2);
    });   
});


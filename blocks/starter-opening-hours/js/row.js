/**
 * Block.
 * 
 * This is where we define our block.
 */

/**
 * Block Dependencies.
 */

// Shared Comonents
import TimePicker from '../../components/time-picker/index';

// From Block
import attributes from './attributes'; // Attribute Registration

// Imported from WordPress
import classnames from 'classnames'; // Enables us to concat classnames

// Internal Block Libraries
const { registerBlockType } = wp.blocks;
const { 
	BaseControl,
	SelectControl,
}                           = wp.components;
const { __ }                = wp.i18n; // Localization

/**
 * Register Block
 */
export default registerBlockType( 'plugin-name/starter-opening-hours-row', {

	// Set the title.
	title: __( 'Starter Opening Hours Row', 'plugin-name' ),

	// Set the description.
	description: __( 'A starter block that provides useful boilerplating for an opening hours row block.', 'plugin-name' ),
	
	// Select a category.
	category: 'starter-blocks', // Custom (see ./index.php)
	// category:   'common',
	// category:   'embed',
	// category:   'formatting',
	// category:   'layout',
	// category:   'widgets',

	// Set the icon.
	icon: {
		background: '#2cc795',    // Icon custom background colour
		foreground: '#fff',       // Icon custom forground colour
		src: 'clock'              // WordPress Dashicon reference (we can pass an svg for custom icon)
	},
	keywords:[
		__( 'Starter' ),
		__( 'Opening Hours Row' ),
		__( 'Opening Hours Row Starter' ),
	],

	// Enable the align left / right / center controls in the toolbar.
	supports: {
		align: false,
	},

	// Only allow this as a child of the following blocks.
	parent: [ 'plugin-name/starter-opening-hours' ],

	// Set the attribes
	attributes: {
		closed: {
			type: 'string',
		},
		day: {
			type: 'string',
			default: 'monday',
		},
		open: {
			type: 'string',
		},
	},

	/**
	 * Edit
	 * 
	 * If we were doing something with an API we would use withSelect here, and use slightly
	 * different syntax, but we are not in this example.
	 */
	edit: props => {

		/**
		 * Extract Props
		 * 
		 * We could access props by typing props.attributes.name, or props.name.
		 * However setting them up here gives us an easy reference of what we can
		 * use in our component.
		 */
		const {
			attributes: {
				day,
				open,
				closed,
			},
			className, 
			setAttributes, 
			isSelected,
		} = props;

		const optionsDay = [
			{ label: __( 'Monday', 'plugin-name' ), value: 'monday' },
			{ label: __( 'Tuesday', 'plugin-name' ), value: 'tuesday' },
			{ label: __( 'Wednesday', 'plugin-name' ), value: 'wednesday' },
			{ label: __( 'Thursday', 'plugin-name' ), value: 'thursday' },
			{ label: __( 'Friday', 'plugin-name' ), value: 'friday' },
			{ label: __( 'Saturday', 'plugin-name' ), value: 'saturday' },
			{ label: __( 'Sunday', 'plugin-name' ), value: 'sunday' },
		];

		const dateEnd         = moment( '0000-01-01 17:00' );
		const dateStart       = moment( '0000-01-01 09:00' );
		const formattedClosed = closed ? moment( closed ).format( 'kk:mm' ) : dateEnd.format( 'kk:mm' );
		const formattedDay    = day ? day.charAt(0).toUpperCase() + day.slice(1) : __( 'Monday', 'plugin-name' );
		const formattedOpen   = open ? moment( open ).format( 'kk:mm' )  : dateStart.format( 'kk:mm' );

		/**
		 * Functions.
		 * 
		 * Functions for this Component.
		 */
		const onChangeClosed  = closed => { setAttributes( { closed } ) };
		const onChangeDay     = day => { setAttributes( { day } ) };
		const onChangeOpen    = open => { setAttributes( { open } ) };

		/**
		 * Return 
		 * 
		 * Here is where we return our JSX. Note that because we are not passing in Inspector
		 * Controls or a Toolbar, we don't need to return an array.
		 */
		return (
			<div
				className={ classnames( className, 'starter-opening-hours-row' ) } 
			>
				<div class="starter-opening-hours__column starter-opening-hours__column--day">
					{ isSelected ? (
					<SelectControl
						label="Day"
						onChange={ onChangeDay }
						options={ optionsDay }
						value={ day }
					/>
					) : ( 
						<span>{ formattedDay }</span>	
					) }
				</div>
				<div class="starter-opening-hours__column starter-opening-hours__column--open">
					{ isSelected ? (
					<BaseControl
						label="Opening Time"
					>
						<TimePicker
							currentTime={ dateStart }
							is12Hour={ false }
							onChange={ onChangeOpen }
							value={ open }
						/>
					</BaseControl>
					) : ( 
						formattedOpen
					) }
				</div>
				<div class="starter-opening-hours__column starter-opening-hours__column--closed">
					{ isSelected ? (
					<BaseControl
						label="Closing Time"
					>
						<TimePicker
							currentTime={ dateEnd }
							is12Hour={ false }
							onChange={ onChangeClosed }
							value={ closed }
						/>
					</BaseControl>
					) : ( 
						formattedClosed
					) }
				</div>
			</div>
		);
	},

	/**
	 * Save
	 * 
	 * It is possible to render the save view in PHP. We are not in this example though.
	 * 
	 * We pass in the props we need for output. Which should not be as many as in the 
	 * Edit View.  
	 */
	save: props => {

		const {
			attributes: {
				day,
				open,
				closed,
			},
			className, 
		} = props;

		const dateEnd         = moment( '0000-01-01 17:00' );
		const dateStart       = moment( '0000-01-01 09:00' );
		const formattedClosed = closed ? moment( closed ).format( 'kk:mm' ) : dateEnd.format( 'kk:mm' );
		const formattedDay    = day ? day.charAt(0).toUpperCase() + day.slice(1) : '';
		const formattedOpen   = open ? moment( open ).format( 'kk:mm' )  : dateStart.format( 'kk:mm' );

		/**
		 * Return 
		 * 
		 * For the most part this should be plain HTML with a few
		 * { variables } scattered around.
		 */
		return (
			<tr
				className={ classnames( className, 'starter-opening-hours-row' ) } 
			>
				<td>
					{ formattedDay }
				</td>
				<td>
					{ formattedOpen }
				</td>
				<td>
					{ formattedClosed }
				</td>
			</tr>
		);
	},
} );

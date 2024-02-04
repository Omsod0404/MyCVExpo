import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, StatusBar} from 'react-native';
import { useFonts } from 'expo-font';

const imageBackground = require('./img/fondo.jpg');
const imageUser = require('./img/fotoalumno.jpg');


const colorsPalette = {
  primaryColor: '#4F276F',
  secondaryColor: '#0f6b6f',
  back1Color: 'rgba(245,245,245,1.0)',
  back2Color: '#05060E',
  fontColor: '#000000',
  alter1Color:'#21e0bf',
  alter2Color:'#b03ac1',
  transparent: 'rgba(0,0,0,0.6)'
};

const App = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBack}>
        <StatusBar barStyle={'light-content'} backgroundColor={colorsPalette.back2Color}></StatusBar>
        <View style = {styles.header}>
          <Image source={imageUser} style={styles.imageUser}></Image>
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Omar García Martínez{'\n'}Ingeniero en Software</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTittle}>Perfil profesional</Text>
            <Text style={styles.sectionSubT}>Mi preparación y experiencia</Text>
            <Text style={styles.sectionText}>Mi participación dentro de los proyectos fue tanto parte del Front-End como del Back-End usando diferentes tecnologías para el desarrollo de aplicaciones de escritorio, móvil y web con poco más de dos años de experiencia.{'\n\n'}
            <Text style={styles.year}>2022{'\n'}</Text>Participe en el diseño de una aplicación inmobiliaria, y en la espeficicacion de sus requerimientos funcionales y no funcionales. Participe en el desarrollo de una aplicación de inventarios de escritorio implementando una base de datos.{'\n\n'}
            <Text style={styles.year}>2023{'\n'}</Text>Participe en el diseño y funcionalidad de una tienda web. Participe en el desarrollo de una pagina web para el registro de alumnos, asi como en el desarrolo de su base de datos. Forme parte de un proyecto para la implementación de una red LAN. Desarrolle una API para acceder a una base de datos de personal de una empresa implementando JWT. Forme parte de un equipo en el cual realizamos tres proyectos: encriptacion de imagenes, desarrollo de una aplicacion de chats y el desarrollo de un cluster para el procesamiento de videos.
            </Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.sectionSubT2}>Mi formación academica</Text>
            <Text style={styles.sectionText2}>Forge mis estudios en la Carrera de Ingenieria de Software, Plan 2018, de la Facultad de Informática de la Universidad Autonóma de Querétaro.</Text>
          </View>
          <View style={styles.section3}>
          <Text style={styles.sectionSubT2}>Tecnologías y lenguajes de programación usados</Text>
            <View style={styles.logosSet}>
              <Image source={require('./img/logos/html.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/css.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/js.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/java.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/csharp.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/python.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/php.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/oracle.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/node.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/express.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/visual.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/react.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/jira.jpg')} style={styles.logos}></Image>
              <Image source={require('./img/logos/git.png')} style={styles.logos}></Image>
              <Image source={require('./img/logos/github.png')} style={styles.logos}></Image>
            </View>
          </View>
          <View style={styles.section}>
          <Text style={styles.sectionSubT}>Mis aptitudes</Text>
            <Text style={styles.sectionText}>
              -- Capacidad de realizar un Diseño Centrado en el Usuario.{'\n'}
              -- Trabajo colaborativo.{'\n'}
              -- Adaptación a nuevos entornos de trabajo.{'\n'}
              -- Creación de código.{'\n'}
              -- Documentación de desarrollos.{'\n'}
              -- Capacidad analítica.{'\n'}
              -- Resolución de problemas.{'\n'}
              -- Nivel de inglés A2-B1.{'\n'}
            </Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.sectionTittle2}>Información personal</Text>
            <Text style={styles.sectionSubT2}>Sobre mi</Text>
            <Text style={styles.sectionText2}>
              Algunas de las razones por las que decidi estudiar esta carrera es porque considero que el mundo informático ha estado en su auge desde los últimos 10 años , y una de sus ramas más importantes es la Ingeniería de Software, la cual es la que llamo mi atención, debido a que es un ambito al que se le pueden seguir nuevos ambitos en el mercado y se pueden mejorar algunos ambitos de igual manera.
            </Text>
            <Text style={styles.sectionSubT2}>Perfil</Text>
            <Text style={styles.sectionText2}>
              Nací el 4 de abril de 2003 en la ciudad de Querétaro, Querétaro. Actualmente tengo 20 años de edad.
            </Text>
            <Text style={styles.sectionSubT2}>Ubicación</Text>
            <Text style={styles.sectionText2}>
              Actualmente me encuentro viviendo en la ciudad de Querétaro, Querétaro, mi dirección es Av. Agustín González Medina, Cond. Hugo Gutierrez #4801, Int.65, Fraccionamiento Loarca, 76118.
            </Text>
            <Text style={styles.sectionSubT2}>Intereses</Text>
            <Text style={styles.sectionText2}>
              A pesar de que esta rama de la imformatica tiene un gran campo laboral en diversos ambitos, yo siempre me enfoque hacia el ambito automotriz o hacia el ambito de la música ya que son las dos cosas que me apasionan despues de esta.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTittle}>Contacto</Text>
            <View style={styles.contacto}>
              <View style={styles.contactoSub}> 
                <Text style={styles.sectionSubT}>Teléfono</Text>
                <Text style={styles.sectionText3}>+52 446-110-0926</Text>
              </View>
              <View style={styles.contactoSub}> 
                <Text style={styles.sectionSubT}>Correo</Text>
                <Text style={styles.sectionText3}>garciaomarucho@gmail.com</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageBack: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover' ,
  },
  header:{
    backgroundColor: colorsPalette.transparent,
    height: '15%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  imageUser:{
    height: 100,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 50,
    borderColor: colorsPalette.primaryColor,
    borderWidth: 5,
  },
  headerText:{
    alignContent: 'center',
    justifyContent: 'center',
    height: 100,
    width: 'auto'
  },
  headerName:{
    color: colorsPalette.back1Color,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold'
  },
  scrollContent:{
    width: '100%',
    backgroundColor: colorsPalette.transparent
  },
  section:{
    backgroundColor: colorsPalette.back1Color,
    width: '100%',
    height: 'auto'
  },
  section2:{
    backgroundColor: colorsPalette.back2Color,
    width: '100%',
    height: 'auto'
  },
  section3:{
    width: '100%',
    height: 'auto'
  },
  sectionTittle:{
    fontFamily: 'Poppins-Bold',
    width: 'auto',
    textAlign: 'center',
    margin: 4,
    fontSize: 20,
    color: colorsPalette.primaryColor
  },
  sectionTittle2:{
    fontFamily: 'Poppins-Bold',
    width: 'auto',
    textAlign: 'center',
    margin: 4,
    fontSize: 20,
    color: colorsPalette.alter2Color
  },
  sectionSubT:{
    fontFamily: 'Poppins-Bold',
    width: 'auto',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 20,
    fontSize: 16,
    color: colorsPalette.secondaryColor
  },
  sectionSubT2:{
    fontFamily: 'Poppins-Bold',
    width: 'auto',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 4,
    fontSize: 16,
    color: colorsPalette.alter1Color
  },
  sectionText:{
    fontFamily: 'Poppins-Regular',
    width: 'auto',
    margin: 6,
    fontSize: 12,
    color: colorsPalette.fontColor,
    textAlign: 'justify'
  },
  sectionText2:{
    fontFamily: 'Poppins-Regular',
    width: 'auto',
    margin: 6,
    fontSize: 12,
    color: colorsPalette.back1Color,
    textAlign: 'justify'
  },
  sectionText3:{
    fontFamily: 'Poppins-Regular',
    width: 'auto',
    margin: 6,
    fontSize: 12,
    color: colorsPalette.fontColor,
    textAlign: 'center'
  },
  year:{
    fontFamily: 'Poppins-Bold'
  },
  logosSet:{
    width:'100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 10,
  },
  logos:{
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 15,
    margin: 5
  },
  contacto:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default App;